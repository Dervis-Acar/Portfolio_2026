tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── New minimal neutral system ─────────────────────────── */
                "ink": "#0a0a0b",
                "ink-2": "#0f0f11",
                "ink-3": "#141417",
                "line": "#222226",
                "line-2": "#2c2c32",
                "fg": "#ececee",
                "fg-2": "#a0a0a8",
                "fg-3": "#6c6c74",
                "accent": "#8da9ce",
                "accent-dim": "#5c728e",

                /* ── Legacy tokens (kept so the architecture diagram and
                      other existing markup render exactly as before) ───── */
                "secondary-fixed-dim": "#cdc0e9",
                "on-tertiary-fixed": "#241a00",
                "on-tertiary": "#3e2e00",
                "outline-variant": "#494551",
                "primary-container": "#6750a4",
                "inverse-surface": "#e6e0e9",
                "on-tertiary-container": "#503d00",
                "on-secondary-fixed": "#1f1635",
                "surface-tint": "#cfbcff",
                "on-error": "#690005",
                "tertiary-container": "#c9a74d",
                "on-tertiary-fixed-variant": "#594400",
                "outline": "#948e9c",
                "primary-fixed": "#e9ddff",
                "on-primary-fixed-variant": "#4f378a",
                "on-primary-fixed": "#22005d",
                "on-primary-container": "#e0d2ff",
                "background": "#0a0a0b",
                "inverse-on-surface": "#322f35",
                "on-secondary-fixed-variant": "#4b4263",
                "on-surface": "#e6e0e9",
                "error": "#ffb4ab",
                "secondary-fixed": "#e9ddff",
                "on-error-container": "#ffdad6",
                "tertiary": "#e7c365",
                "primary": "#cfbcff",
                "secondary-container": "#4d4465",
                "on-secondary": "#342b4b",
                "error-container": "#93000a",
                "tertiary-fixed-dim": "#e7c365",
                "tertiary-fixed": "#ffdf93",
                "on-surface-variant": "#cbc4d2",
                "surface-container-highest": "#36343a",
                "surface": "#141218",
                "surface-container-low": "#1d1b20",
                "on-secondary-container": "#bfb2da",
                "primary-fixed-dim": "#cfbcff",
                "surface-bright": "#3b383e",
                "on-primary": "#381e72",
                "secondary": "#cdc0e9",
                "inverse-primary": "#6750a4",
                "on-background": "#ececee",
                "surface-dim": "#141218",
                "surface-container-lowest": "#0f0d13",
                "surface-variant": "#36343a",
                "surface-container-high": "#2b292f",
                "surface-container": "#211f24",
                "neon-cyan": "#0ff",
                "acid-green": "#a3e635"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "sm": "0.125rem",
                "md": "0.25rem",
                "lg": "0.25rem",
                "xl": "0.375rem",
                "2xl": "0.5rem",
                "full": "9999px"
            },
            spacing: {
                "grid-margin": "2.5rem",
                "grid-gutter": "2rem",
                "mobile-margin": "1.5rem",
                "section-gap": "6.5rem"
            },
            maxWidth: {
                "wrap": "1160px",
                "wrap-wide": "1360px",
                "measure": "68ch"
            },
            fontFamily: {
                "code-sm": ["JetBrains Mono", "ui-monospace", "monospace"],
                "display-lg": ["Inter", "system-ui", "sans-serif"],
                "headline-md": ["Inter", "system-ui", "sans-serif"],
                "display-lg-mobile": ["Inter", "system-ui", "sans-serif"],
                "body-lg": ["Inter", "system-ui", "sans-serif"],
                "body-md": ["Inter", "system-ui", "sans-serif"],
                "label-caps": ["Inter", "system-ui", "sans-serif"]
            },
            fontSize: {
                "code-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],
                "display-lg": ["60px", { lineHeight: "64px", letterSpacing: "-0.035em", fontWeight: "600" }],
                "display-lg-mobile": ["38px", { lineHeight: "42px", letterSpacing: "-0.03em", fontWeight: "600" }],
                "headline-md": ["26px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "600" }],
                "headline-lg": ["30px", { lineHeight: "38px", letterSpacing: "-0.022em", fontWeight: "600" }],
                "body-lg": ["17px", { lineHeight: "28px", fontWeight: "400" }],
                "body-md": ["15px", { lineHeight: "25px", fontWeight: "400" }],
                "body-sm": ["13.5px", { lineHeight: "22px", fontWeight: "400" }],
                "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.14em", fontWeight: "500" }]
            }
        }
    }
}
