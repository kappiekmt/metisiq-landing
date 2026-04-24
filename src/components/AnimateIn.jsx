import { useInView } from '../hooks/useInView'

export default function AnimateIn({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView()

  const variants = {
    bottom: 'translate-y-6 opacity-0',
    left:   'translate-x-[-16px] opacity-0',
    scale:  'scale-[0.97] opacity-0',
    fade:   'opacity-0',
  }

  return (
    <Tag
      ref={ref}
      className={`transition-[transform,opacity] duration-700 ease-out ${
        inView ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : variants[from]
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
