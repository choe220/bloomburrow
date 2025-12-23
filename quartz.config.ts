import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Bloomburrow 🍁",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F2E9D4",          // Eldritch Bone (Parchment background)
          lightgray: "#E5DEC9",      // Muted Bone (Borders/Search)
          gray: "#8B8579",           // River Silt (Metadata/Dates)
          darkgray: "#5C4033",       // Soft Bark Brown (Body Text)
          dark: "#2D3E40",           // Storm-Cloud Teal (Headers)
          secondary: "#4A6D3F",      // Mossy Canopy Green (Links & UI)
          tertiary: "#E9BC4F",       // Sun-Drenched Gold (Hover & Accents)
          highlight: "rgba(74, 109, 63, 0.1)", // Soft Mossy Highlight
          textHighlight: "#E9BC4F88", // Gold Text Highlight
        },
        darkMode: {
          light: "#1A1C23",          // Nightshade Slate (Deep Background)
          lightgray: "#2D3E40",      // Storm-Cloud Teal (UI Accents)
          gray: "#646464",           // Iron Grey
          darkgray: "#F2E9D4",       // Eldritch Bone (Readable Body Text)
          dark: "#E9BC4F",           // Sun-Drenched Gold (Main Headers)
          secondary: "#4A6D3F",      // Mossy Canopy Green (Links)
          tertiary: "#D95D39",       // Autumn Ember (Hover/Unresolved)
          highlight: "rgba(233, 188, 79, 0.15)", // Subtle Gold Highlight
          textHighlight: "#D95D3988", // Autumn Ember Highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
