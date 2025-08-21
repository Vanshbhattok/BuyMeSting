"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session]);

  const getData = async () => {
    let u = await fetchuser(session.user.name);
    setForm(u || {});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop reload
    const res = await updateProfile(form, session.user.name);

    if (res?.error) {
      toast.error(res.error, { theme: "dark", transition: Bounce });
    } else {
      toast.success("🚀 Your Profile is Updated", {
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div className="container mx-auto py-5 px-6">
        <div className="flex gap-2 text-3xl md:text-5xl mt-10 text-center font-bold justify-center items-center">
          <span>
            <img src="/Thunder2.gif" width={50} alt="" />
          </span>
          Let&apos;s Complete Your Registration!
          <span>
            <img src="/Thunder2.gif" width={50} alt="" />
          </span>
        </div>

        <form
          className="max-w-2xl mx-auto mt-10"
          onSubmit={handleSubmit} 
        >
          {/* Name */}
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name || ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Email */}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email || ""}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Username */}
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username || ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Profile Picture */}
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic || ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Cover Picture */}
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic || ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Razorpay ID */}
          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay Id
            </label>
            <input
              value={form.razorpayid || ""}
              onChange={handleChange}
              type="text"
              name="razorpayid"
              id="razorpayid"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Razorpay Secret */}
          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret || ""}
              onChange={handleChange}
              type="text"
              name="razorpaysecret"
              id="razorpaysecret"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            />
          </div>

          {/* Submit */}
          <div className="my-6">
            <button
              type="submit"
              className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
