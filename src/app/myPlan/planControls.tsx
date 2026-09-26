export type PlanTab = 'today' | 'saved'
export type SortOption = 'duration' | 'caloriesBurned' | 'rating'

interface PlanControlsProps {
  activeTab: PlanTab
  onTabChange: (tab: PlanTab) => void
  todayCount: number
  savedCount: number
  sortOption: SortOption
  onSortChange: (sortOption: SortOption) => void
}

const PlanControls = ({ activeTab, onTabChange, todayCount, savedCount, sortOption, onSortChange }: PlanControlsProps) => (
  <div className="mb-5 mt-7 flex flex-wrap items-center justify-between gap-3">
    <div role="tablist" aria-label="Plan workouts" className="inline-flex rounded-lg border border-(--border) bg-(--surface) p-1">
      <button type="button" role="tab" aria-selected={activeTab === 'today'} onClick={() => onTabChange('today')} className={`rounded-md px-4 py-2 text-sm transition-colors ${activeTab === 'today' ? 'bg-[#20242e] text-white' : 'text-(--muted) hover:text-white'}`}>
        Today&apos;s Plan <span className="ml-1 text-xs text-(--muted)">{todayCount}</span>
      </button>
      <button type="button" role="tab" aria-selected={activeTab === 'saved'} onClick={() => onTabChange('saved')} className={`rounded-md px-4 py-2 text-sm transition-colors ${activeTab === 'saved' ? 'bg-[#20242e] text-white' : 'text-(--muted) hover:text-white'}`}>
        Saved <span className="ml-1 text-xs text-(--muted)">{savedCount}</span>
      </button>
    </div>
    <label className="flex items-center gap-2 text-sm text-(--muted)">
      Sort by
      <select value={sortOption} onChange={(event) => onSortChange(event.target.value as SortOption)} className="rounded-lg border border-(--border) bg-(--surface) px-3 py-2 text-(--foreground) outline-none focus:border-(--themecolor)">
        <option value="duration">Duration</option>
        <option value="caloriesBurned">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </label>
  </div>
)

export default PlanControls