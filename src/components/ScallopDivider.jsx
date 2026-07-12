/**
 * A scalloped, cut-paper edge - like construction paper trimmed with craft scissors.
 * `from` is the color of the section above, `to` is the color of the section the
 * scallops reveal (the section below). Flip mirrors the bumps to point upward.
 */
export default function ScallopDivider({ from = 'var(--color-light)', to = 'var(--color-primary)', flip = false }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-6 w-full md:h-8"
      style={{
        backgroundColor: to,
        backgroundImage: `radial-gradient(circle at 16px ${flip ? '100%' : '0'}, transparent 15px, ${from} 15.5px)`,
        backgroundSize: '32px 100%',
        backgroundRepeat: 'repeat-x',
      }}
    />
  );
}
