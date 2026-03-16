"use client";

import { useState } from "react";
import type { CopyReviewPart } from "../types";

interface Props {
  part: CopyReviewPart;
  onApprove: (prompt: string) => void;
  onEdit: (fieldLabel: string, newValue: string, updatedPrompt: string) => void;
}

export function CopyReviewCard({ part, onApprove, onEdit }: Props) {
  const [fields, setFields] = useState(part.fields);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (idx: number) => {
    setEditingIdx(idx);
    setEditValue(fields[idx].value);
  };

  const commitEdit = (idx: number) => {
    if (editValue.trim() === fields[idx].value) {
      setEditingIdx(null);
      return;
    }
    const updated = fields.map((f, i) =>
      i === idx ? { ...f, value: editValue.trim() } : f
    );
    setFields(updated);
    setEditingIdx(null);
    // Build a natural language edit prompt
    const editPrompt = `Atualizar ${updated[idx].label}: "${updated[idx].value}"`;
    onEdit(updated[idx].label, updated[idx].value, editPrompt);
  };

  const buildApprovePrompt = () => {
    // Include final field values in the approve message so the agent knows what was confirmed
    const summary = fields.map((f) => `${f.label}: "${f.value}"`).join(" | ");
    return `${part.approvePrompt} [Confirmado: ${summary}]`;
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#13141f] shadow-xl w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
        <span className="text-sm">✏️</span>
        <span className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
          Rascunho
        </span>
        <span className="text-[11px] text-white/30 ml-1">— {part.templateName}</span>
      </div>

      {/* Fields */}
      <div className="px-4 py-3 space-y-3">
        {fields.map((field, idx) => (
          <div key={idx}>
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-1">
              {field.label}
            </p>
            {editingIdx === idx ? (
              <div className="flex gap-2 items-start">
                <textarea
                  autoFocus
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      commitEdit(idx);
                    }
                    if (e.key === "Escape") setEditingIdx(null);
                  }}
                  rows={2}
                  className="flex-1 text-[13px] font-medium text-white bg-white/8 border border-indigo-500/40 rounded-lg px-2.5 py-1.5 resize-none outline-none leading-snug"
                />
                <button
                  onClick={() => commitEdit(idx)}
                  className="px-2 py-1 rounded-lg bg-indigo-500 text-white text-[10px] font-bold mt-0.5 hover:bg-indigo-400 transition-colors shrink-0"
                >
                  OK
                </button>
              </div>
            ) : (
              <button
                className="w-full text-left group"
                onClick={() => startEdit(idx)}
                title="Clique para editar"
              >
                <p className="text-[13px] font-medium text-white/90 leading-snug group-hover:text-white transition-colors">
                  "{field.value}"
                  <span className="ml-1.5 text-[10px] text-white/20 group-hover:text-indigo-400 transition-colors">
                    ✏️
                  </span>
                </p>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Hint */}
      <p className="px-4 pb-1 text-[9px] text-white/25 italic">
        Clique em qualquer texto para editar
      </p>

      {/* Actions */}
      <div className="flex gap-2 px-4 py-3 border-t border-white/8">
        <button
          onClick={() => onApprove(buildApprovePrompt())}
          className="flex-1 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-[12px] font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 active:scale-[0.98]"
        >
          ✅ Gerar assim
        </button>
        <button
          onClick={() => startEdit(0)}
          className="px-4 py-2.5 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[12px] font-medium transition-all active:scale-[0.98]"
        >
          ✏️ Mudar
        </button>
      </div>
    </div>
  );
}
