import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from '@/components/icons'
import { cn } from '@/lib/utils'

export interface BookADemoModalProps {
  isOpen: boolean
  onClose: () => void
  formUrl?: string
  title?: string
  className?: string
}

export function BookADemoModal({
  isOpen,
  onClose,
  formUrl = 'https://share-na2.hsforms.com/2gyFHoyqwRo-h-w9l6tGgPw40oxbn',
  title = 'Request Form',
  className,
}: BookADemoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a Demo Request Form"
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative flex flex-col w-full max-w-[600px] h-[85vh] max-h-[620px] rounded-md shadow-2xl overflow-hidden transition-all duration-200',
          className,
        )}
      >
        {/* Close Button */}
        {/* <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2.5 right-2.5 z-20 flex size-8 items-center justify-center rounded-full bg-black/10 text-ink hover:bg-black/20 hover:text-black focus-visible:outline-2 focus-visible:outline-brand transition-colors cursor-pointer"
        >
          <IconX className="size-4" />
        </button> */}

        {/* HubSpot Form Iframe */}
        <iframe
          src={formUrl}
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          title={title}
          className="w-full h-full"
        />
      </div>
    </div>,
    document.body,
  )
}

export const BookDemoModal = BookADemoModal
