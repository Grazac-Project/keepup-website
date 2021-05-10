import { useMediaQuery } from "react-responsive"

export const useDevice = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 37.5em)" })
  const isTab = useMediaQuery({ query: "(max-width: 46em)" })
  const isTabPort = useMediaQuery({ query: "(max-width: 56.25em)" })
  const isTabLand = useMediaQuery({ query: "(max-width: 75em)" })
  const isDesktop = useMediaQuery({ query: "(max-width: 112.5em)" })

  return {
    isMobile,
    isTab,
    isTabPort,
    isTabLand,
    isDesktop,
  }
}
