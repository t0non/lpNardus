"use client";

export function RevokeConsentButton() {
  return (
    <button 
      onClick={() => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('cookie_consent');
          window.location.reload();
        }
      }}
      className="text-[var(--color-brand-primary)] font-medium underline"
    >
      Clique aqui para alterar ou revogar o seu consentimento de cookies atual.
    </button>
  );
}
