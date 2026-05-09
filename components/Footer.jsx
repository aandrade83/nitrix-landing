export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-extrabold text-lg">
          Nitric<span className="text-crimson">X</span>
        </div>
        <div className="text-xs text-white/40 max-w-md leading-relaxed">
          © {new Date().getFullYear()} Palumbo Arosemena Holdings LLC. All rights reserved.
          NitricX™ — Premium Athletic Formulation. nitricx.com
        </div>
        <div className="flex gap-5 text-xs text-white/50">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
