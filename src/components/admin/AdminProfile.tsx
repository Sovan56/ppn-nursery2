import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, Save, Lock, ShieldCheck } from 'lucide-react';

export const AdminProfile: React.FC = () => {
  const { adminUser, updateAdminProfile, addToast } = useApp();

  const [name, setName] = useState(adminUser.name);
  const [email, setEmail] = useState(adminUser.email);
  const [photo, setPhoto] = useState(adminUser.photo);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdminProfile({ name, email, photo });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword) {
      addToast('error', 'Error', 'Please enter your current password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      addToast('error', 'Password Mismatch', 'New password and confirm password do not match.');
      return;
    }
    if (newPassword.length < 6) {
      addToast('error', 'Weak Password', 'Password must be at least 6 characters long.');
      return;
    }

    addToast('success', 'Password Updated', 'Your admin password has been changed successfully.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-[#2E7D32] font-['Poppins']">
            Admin Profile & Security
          </h2>
          <p className="text-xs text-[#355E3B]/80 mt-1">
            Update account information, profile avatar, and security credentials.
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleProfileSave} className="bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4 text-xs text-[#355E3B]">
        <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2">
          Personal Information
        </h3>

        <div className="flex items-center gap-4">
          <img
            src={photo}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#66BB6A] shadow-soft"
          />
          <div className="flex-1">
            <label className="block font-bold mb-1">Avatar Image URL</label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="bg-green-gradient text-white px-5 py-2 rounded-xl font-bold shadow-soft flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Update Profile</span>
          </button>
        </div>
      </form>

      {/* Password Change Form */}
      <form onSubmit={handlePasswordChange} className="bg-white p-6 rounded-3xl border border-[#A5D6A7]/40 shadow-soft space-y-4 text-xs text-[#355E3B]">
        <h3 className="font-bold text-sm text-[#2E7D32] font-['Poppins'] border-b border-[#A5D6A7]/30 pb-2 flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#2E7D32]" />
          <span>Change Admin Password</span>
        </h3>

        <div>
          <label className="block font-bold mb-1">Current Password *</label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            placeholder="Enter current password (default: admin123)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-1">New Password *</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
              placeholder="Minimum 6 characters"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Confirm New Password *</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#A5D6A7] bg-[#F8FFF5]"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="bg-green-gradient text-white px-5 py-2 rounded-xl font-bold shadow-soft flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Change Password</span>
          </button>
        </div>
      </form>
    </div>
  );
};
