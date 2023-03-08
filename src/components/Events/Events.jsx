import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CSSDoodle from 'css-doodle'
import './Events.css'

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <>
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 99,
              // include the css-doodle code as a string in the style prop
              style: `
              :doodle {
                @grid: 500x1/ 40vmin;
              }
              :container {
                perspective: 10vmin;
              }

              @place-cell: center;
              @size: 40% 1px;

              will-change: transform, opacity;
              transform-style: preserve-3d;

              background: linear-gradient(to left,
                @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d)),
                transparent @r(50%)
              );

              animation: move @r(1s, 2s, .1) linear infinite;
              animation-delay: -@r(.1s, 2s);

              --trans:
                translateX(50%)
                rotateX(@r(-180deg, 180deg))
                rotateY(@r(-180deg, 180deg))
                rotateZ(@r(-180deg, 180deg));

              transform-origin: 0 center;
              transform: var(--trans) scale(2);
              opacity: 0;

              @keyframes move {
                20% { opacity: 1; }
                100% { transform: var(--trans) scale(0); }
              }
            `,
            }}
          />
        </div>
      </div>
      <div className="event-main">
        <div className="event-title">
          <p>Event </p>
          <br></br>
          <p>The Code Olympics</p>
        </div>
        <div className="event-flex1">
          <div className="stage1">
            <img src="./images/stage1.png" /> <p> Trial by Trivia</p>{' '}
          </div>
          <div className="stage2">
            <img src="./images/stage2.png" /> <p> Break the Code</p>
          </div>
        </div>
        <div className="event-flex2">
          <div className="stage3">
            <img src="./images/stage3.png" /> <p> DesignZillas </p>
          </div>
          <div className="stage4">
            <img src="./images/stage4.png" /> <p> Code Combat</p>
          </div>
        </div>
        <div className="modal-button">
          <motion.button
            className="btn-grad "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            More Info
          </motion.button>
        </div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered

        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}

export default Events
