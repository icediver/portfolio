import clsx from "clsx";

interface ITag {
  handleTagClick: (key: string) => void;
  active: string;
  tag: string;
  value: number;
}

export function Tag({ active, handleTagClick, tag, value }: ITag) {
  return (
    <div
      className={clsx(
        "flex items-center text-white/30 justify-center cursor-pointer bg-slate-500/30 rounded-2xl py-1 transition-colors",
        {
          "bg-slate-500/50 !text-white/60": active === tag,
          "hover:bg-slate-500/50": active !== tag,
        },
      )}
      onClick={() => handleTagClick(tag)}
    >
      <p>
        {tag}
        <span>: {value}</span>
      </p>
    </div>
  );
}
