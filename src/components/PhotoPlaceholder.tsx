interface PhotoPlaceholderProps {
  label?: string;
  aspectRatio?: "wide" | "square" | "tall";
}

const PhotoPlaceholder = ({ label = "Add your photo here", aspectRatio = "wide" }: PhotoPlaceholderProps) => {
  const heightClass = {
    wide: "h-64 md:h-96",
    square: "h-72 md:h-96",
    tall: "h-96 md:h-[32rem]",
  }[aspectRatio];

  return (
    <div className={`placeholder-zone ${heightClass} flex flex-col items-center justify-center gap-3`}>
      <svg className="w-12 h-12 text-blog-gold opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="font-body text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default PhotoPlaceholder;
