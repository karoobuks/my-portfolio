/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        github: {
          canvas: {
            default: '#ffffff',
            overlay: '#ffffff',
            inset: '#f6f8fa',
            subtle: '#f6f8fa'
          },
          fg: {
            default: '#1f2328',
            muted: '#656d76',
            subtle: '#6e7781',
            onEmphasis: '#ffffff'
          },
          border: {
            default: '#d1d9e0',
            muted: '#d8dee4',
            subtle: '#afb8c1'
          },
          neutral: {
            emphasis: '#6e7781',
            emphasisPlus: '#656d76',
            muted: 'rgba(175,184,193,0.2)',
            subtle: 'rgba(175,184,193,0.1)'
          },
          accent: {
            fg: '#0969da',
            emphasis: '#0969da',
            muted: 'rgba(84,174,255,0.4)',
            subtle: 'rgba(84,174,255,0.1)'
          },
          success: {
            fg: '#1a7f37',
            emphasis: '#1f883d',
            muted: 'rgba(74,194,107,0.4)',
            subtle: 'rgba(74,194,107,0.1)'
          },
          attention: {
            fg: '#9a6700',
            emphasis: '#bf8700',
            muted: 'rgba(212,167,44,0.4)',
            subtle: 'rgba(212,167,44,0.1)'
          },
          severe: {
            fg: '#bc4c00',
            emphasis: '#d1242f',
            muted: 'rgba(251,143,103,0.4)',
            subtle: 'rgba(251,143,103,0.1)'
          },
          danger: {
            fg: '#d1242f',
            emphasis: '#cf222e',
            muted: 'rgba(255,129,130,0.4)',
            subtle: 'rgba(255,129,130,0.1)'
          },
          done: {
            fg: '#8250df',
            emphasis: '#8250df',
            muted: 'rgba(194,151,255,0.4)',
            subtle: 'rgba(194,151,255,0.1)'
          }
        },
        'github-dark': {
          canvas: {
            default: '#0d1117',
            overlay: '#161b22',
            inset: '#010409',
            subtle: '#161b22'
          },
          fg: {
            default: '#e6edf3',
            muted: '#7d8590',
            subtle: '#6e7681',
            onEmphasis: '#ffffff'
          },
          border: {
            default: '#30363d',
            muted: '#21262d',
            subtle: '#484f58'
          },
          neutral: {
            emphasis: '#6e7681',
            emphasisPlus: '#7d8590',
            muted: 'rgba(110,118,129,0.4)',
            subtle: 'rgba(110,118,129,0.1)'
          },
          accent: {
            fg: '#2f81f7',
            emphasis: '#1f6feb',
            muted: 'rgba(56,139,253,0.4)',
            subtle: 'rgba(56,139,253,0.15)'
          },
          success: {
            fg: '#3fb950',
            emphasis: '#238636',
            muted: 'rgba(46,160,67,0.4)',
            subtle: 'rgba(46,160,67,0.15)'
          },
          attention: {
            fg: '#d29922',
            emphasis: '#9e6a03',
            muted: 'rgba(187,128,9,0.4)',
            subtle: 'rgba(187,128,9,0.15)'
          },
          severe: {
            fg: '#db6d28',
            emphasis: '#bc4c00',
            muted: 'rgba(219,109,40,0.4)',
            subtle: 'rgba(219,109,40,0.15)'
          },
          danger: {
            fg: '#f85149',
            emphasis: '#da3633',
            muted: 'rgba(248,81,73,0.4)',
            subtle: 'rgba(248,81,73,0.15)'
          },
          done: {
            fg: '#a5a5ff',
            emphasis: '#8b949e',
            muted: 'rgba(163,113,247,0.4)',
            subtle: 'rgba(163,113,247,0.15)'
          }
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
