import { oswald } from './components/sharedComponents/Navbar/navBar'

const Loading = () => (
  <main className="mx-auto flex min-h-[55vh] w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 text-center">
    <span aria-hidden="true" className="h-9 w-9 animate-spin rounded-full border-2 border-(--border) border-t-(--themecolor)" />
    <p role="status" className={`${oswald.className} text-lg font-semibold tracking-wide`}>Loading workouts…</p>
  </main>
)

export default Loading