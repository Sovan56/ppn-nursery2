import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-soft-lg border bg-white text-[#355E3B] ${
              toast.type === 'success'
                ? 'border-[#66BB6A] bg-[#F8FFF5]'
                : toast.type === 'error'
                ? 'border-red-300 bg-red-50 text-red-800'
                : 'border-[#A5D6A7] bg-white'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-[#2E7D32]" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm leading-snug">{toast.title}</h4>
              <p className="text-xs text-[#355E3B]/80 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-[#A5D6A7]/20 rounded-lg text-[#355E3B]/60 hover:text-[#355E3B] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
