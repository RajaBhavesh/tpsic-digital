"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Notice {
  id: number;
  title: string;
  tag: string;
  date: string;
  is_active: boolean;
  created_at: string;
}

const TAG_OPTIONS = ["Exam", "Admission", "Event", "Result", "Holiday", "Notice"];

function getTagColor(tag: string): string {
  const map: Record<string, string> = {
    Exam:      "bg-red-100 text-red-700",
    Admission: "bg-green-100 text-green-700",
    Event:     "bg-blue-100 text-blue-700",
    Result:    "bg-orange-100 text-orange-700",
    Holiday:   "bg-purple-100 text-purple-700",
    Notice:    "bg-gray-100 text-gray-700",
  };
  return map[tag] ?? "bg-gray-100 text-gray-700";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

export default function AdminDashboard() {
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  // Add notice form
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState("Notice");
  const [newDate, setNewDate] = useState(new Date().toISOString().split("T")[0]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Check auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      } else {
        setUserEmail(session.user.email ?? "");
        fetchNotices();
      }
    });
  }, []);

  async function fetchNotices() {
    setLoading(true);
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("date", { ascending: false });

    if (!error) setNotices(data || []);
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  async function handleAddNotice() {
    if (!newTitle.trim()) {
      setFormError("Title is required.");
      return;
    }
    setSaving(true);
    setFormError("");

    const { error } = await supabase.from("notices").insert({
      title: newTitle.trim(),
      tag: newTag,
      date: newDate,
      is_active: true,
    });

    if (error) {
      setFormError("Failed to add notice. Try again.");
    } else {
      setNewTitle("");
      setNewTag("Notice");
      setNewDate(new Date().toISOString().split("T")[0]);
      setShowForm(false);
      fetchNotices();
    }
    setSaving(false);
  }

  async function toggleActive(id: number, current: boolean) {
    await supabase.from("notices").update({ is_active: !current }).eq("id", id);
    fetchNotices();
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this notice?")) return;
    await supabase.from("notices").delete().eq("id", id);
    fetchNotices();
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Navbar */}
      <header className="bg-blue-900 text-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm">TS</div>
            <div>
              <p className="font-bold text-sm leading-tight">TSIC Admin Panel</p>
              <p className="text-blue-300 text-xs">{userEmail}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank"
              className="text-blue-300 hover:text-white text-xs transition-colors">
              View Site ↗
            </a>
            <button onClick={handleLogout}
              className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Notice Board</h1>
          <p className="text-gray-500 text-sm mt-1">Add, edit or remove school notices — changes go live instantly.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Notices", value: notices.length },
            { label: "Active", value: notices.filter(n => n.is_active).length },
            { label: "Hidden", value: notices.filter(n => !n.is_active).length },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Add Notice Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-blue-900">All Notices</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {showForm ? "Cancel" : "+ Add Notice"}
          </button>
        </div>

        {/* Add Notice Form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-orange-200 p-6 mb-6 shadow-sm">
            <h3 className="font-bold text-blue-900 mb-4">New Notice</h3>

            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Title */}
              <div className="md:col-span-3">
                <label className="text-xs font-medium text-gray-600 block mb-1">Notice Title *</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. School will remain closed on 15 August"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Tag */}
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Category</label>
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                >
                  {TAG_OPTIONS.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Date</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Save Button */}
              <div className="flex items-end">
                <button
                  onClick={handleAddNotice}
                  disabled={saving || !newTitle.trim()}
                  className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
                >
                  {saving ? "Saving..." : "Save Notice"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notices List */}
        {loading ? (
          <div className="flex flex-col gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 animate-pulse h-16" />
            ))}
          </div>
        ) : notices.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center border border-gray-100">
            <p className="text-gray-400 text-sm">No notices yet. Add your first notice!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {notices.map((notice) => (
              <div key={notice.id}
                className={`bg-white rounded-xl p-5 border transition-all ${notice.is_active ? "border-gray-100" : "border-gray-100 opacity-60"}`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <p className="text-xs text-gray-400 min-w-[80px]">{formatDate(notice.date)}</p>
                    <p className={`text-sm font-medium ${notice.is_active ? "text-blue-900" : "text-gray-400 line-through"}`}>
                      {notice.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTagColor(notice.tag)}`}>
                      {notice.tag}
                    </span>
                    {/* Toggle */}
                    <button
                      onClick={() => toggleActive(notice.id, notice.is_active)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                        notice.is_active
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {notice.is_active ? "Live" : "Hidden"}
                    </button>
                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(notice.id)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}