const SectionTitle = ({title}) => {
  return (
    <span className="relative mr-6 px-2 text-brand-accent text-3xl font-bold after:content-[''] after:absolute after:-right-6 after:top-1/2 after:-translate-y-1/2 after:h-[2.5px] after:w-5 after:bg-[#1B432A] after:shadow-[0_0_6px_#50B07C]">{title}</span>
  )
}

export default SectionTitle