tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
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
                "background": "#141218",
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
                "on-background": "#e6e0e9",
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
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            spacing: {
                "grid-margin": "4rem",
                "grid-gutter": "2rem",
                "mobile-margin": "1.5rem",
                "section-gap": "8rem"
            },
            fontFamily: {
                "code-sm": ["JetBrains Mono"],
                "display-lg": ["Bricolage Grotesque"],
                "headline-md": ["Bricolage Grotesque"],
                "display-lg-mobile": ["Bricolage Grotesque"],
                "body-lg": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "label-caps": ["JetBrains Mono"]
            },
            fontSize: {
                "code-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],
                "display-lg": ["72px", { lineHeight: "76px", letterSpacing: "-0.04em", fontWeight: "800" }],
                "headline-md": ["32px", { lineHeight: "40px", fontWeight: "700" }],
                "display-lg-mobile": ["44px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "800" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }]
            }
        }
    }
}
