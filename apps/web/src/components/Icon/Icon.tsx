type IconProps = {
  name: keyof typeof ICONS;
  color?: 'white' | 'black' | 'currentColor';
  width?: string | number;
  height?: string | number;
};

type SvgProps = {
  color?: 'white' | 'black' | 'currentColor';
  width?: string;
  height?: string;
};

const ICONS: Record<string, (props: SvgProps) => JSX.Element> = {
  discord: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3303 2.50578C18.7535 1.78387 17.0888 1.27172 15.3789 0.982422C15.1449 1.40071 14.9332 1.83107 14.7446 2.27171C12.9232 1.99724 11.071 1.99724 9.24961 2.27171C9.06095 1.83112 8.84924 1.40076 8.61535 0.982422C6.90433 1.27417 5.2386 1.78753 3.66019 2.50955C0.526644 7.14569 -0.322811 11.6667 0.101917 16.1235C1.937 17.4793 3.99098 18.5105 6.17458 19.1721C6.66626 18.5108 7.10134 17.8093 7.47519 17.0749C6.76511 16.8097 6.07975 16.4825 5.42706 16.0971C5.59884 15.9725 5.76684 15.8441 5.92918 15.7195C7.82837 16.6127 9.90124 17.0758 12 17.0758C14.0987 17.0758 16.1715 16.6127 18.0707 15.7195C18.235 15.8536 18.403 15.9819 18.5729 16.0971C17.9189 16.4831 17.2323 16.8109 16.5209 17.0768C16.8943 17.8108 17.3294 18.5118 17.8216 19.1721C20.007 18.5131 22.0626 17.4825 23.898 16.1254C24.3963 10.9569 23.0467 6.47746 20.3303 2.50578ZM8.01318 13.3826C6.82961 13.3826 5.85179 12.3085 5.85179 10.9871C5.85179 9.66575 6.79563 8.58222 8.0094 8.58222C9.22318 8.58222 10.1934 9.66575 10.1727 10.9871C10.1519 12.3085 9.21941 13.3826 8.01318 13.3826ZM15.9867 13.3826C14.8013 13.3826 13.8272 12.3085 13.8272 10.9871C13.8272 9.66575 14.7711 8.58222 15.9867 8.58222C17.2024 8.58222 18.1651 9.66575 18.1444 10.9871C18.1236 12.3085 17.193 13.3826 15.9867 13.3826Z"
        fill={color}
      />
    </svg>
  ),
  twitter: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.543 5.18103C21.5576 5.39261 21.5576 5.60419 21.5576 5.81771C21.5576 12.324 16.6045 19.8277 7.54759 19.8277V19.8238C4.87215 19.8277 2.25229 19.0613 0 17.6164C0.389031 17.6632 0.780012 17.6866 1.17197 17.6875C3.38915 17.6895 5.54296 16.9456 7.28726 15.5757C5.18026 15.5357 3.3326 14.1619 2.68714 12.1563C3.42523 12.2986 4.18574 12.2694 4.91018 12.0715C2.61304 11.6074 0.96039 9.58907 0.96039 7.24514V7.18274C1.64485 7.56397 2.41121 7.77554 3.19513 7.79894C1.03157 6.353 0.364656 3.47475 1.67118 1.22442C4.17112 4.30059 7.8596 6.17067 11.8191 6.3686C11.4223 4.65842 11.9644 2.86634 13.2436 1.66415C15.2268 -0.200081 18.3459 -0.104529 20.2101 1.87768C21.3129 1.66025 22.3698 1.25562 23.337 0.682308C22.9694 1.8221 22.2001 2.79029 21.1725 3.40553C22.1484 3.29047 23.102 3.02917 24 2.63039C23.3389 3.621 22.5063 4.48389 21.543 5.18103Z"
        fill={color}
      />
    </svg>
  ),
  github: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0099 0.277344C5.36875 0.277344 0 5.68567 0 12.3765C0 17.7249 3.43994 22.2521 8.21205 23.8545C8.80869 23.9749 9.02724 23.5941 9.02724 23.2738C9.02724 22.9933 9.00757 22.0318 9.00757 21.0301C5.6667 21.7514 4.97099 19.5878 4.97099 19.5878C4.43409 18.1855 3.63858 17.8252 3.63858 17.8252C2.54511 17.084 3.71823 17.084 3.71823 17.084C4.93117 17.1641 5.56763 18.3259 5.56763 18.3259C6.64118 20.1687 8.37111 19.648 9.06706 19.3274C9.16638 18.5462 9.48473 18.0054 9.82275 17.7049C7.15817 17.4244 4.35469 16.3829 4.35469 11.7354C4.35469 10.4133 4.8316 9.33162 5.58729 8.49038C5.46807 8.18997 5.0504 6.94778 5.70677 5.28521C5.70677 5.28521 6.72083 4.96464 9.00732 6.52716C9.98625 6.26231 10.9958 6.12758 12.0099 6.12645C13.024 6.12645 14.0577 6.26682 15.0123 6.52716C17.299 4.96464 18.3131 5.28521 18.3131 5.28521C18.9695 6.94778 18.5515 8.18997 18.4323 8.49038C19.2079 9.33162 19.6652 10.4133 19.6652 11.7354C19.6652 16.3829 16.8617 17.4043 14.1772 17.7049C14.6148 18.0855 14.9924 18.8065 14.9924 19.9484C14.9924 21.5709 14.9727 22.8731 14.9727 23.2736C14.9727 23.5941 15.1915 23.9749 15.7879 23.8547C20.56 22.2519 23.9999 17.7249 23.9999 12.3765C24.0196 5.68567 18.6312 0.277344 12.0099 0.277344Z"
        fill={color}
      />
    </svg>
  ),
  'more-menu': ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="32" y1="2" x2="9" y2="2" stroke={color} strokeWidth="4" />
      <line x1="32" y1="12" y2="12" stroke={color} strokeWidth="4" />
      <line x1="32" y1="22" x2="9" y2="22" stroke={color} strokeWidth="4" />
    </svg>
  ),
  close: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.82845 0.272185L25.4559 22.8996L22.6274 25.728L2.28882e-05 3.10061L2.82845 0.272185Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6274 0.272185L3.33786e-06 22.8996L2.82843 25.728L25.4558 3.10061L22.6274 0.272185Z"
        fill={color}
      />
    </svg>
  ),
  caret: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4199 7.52002L11.9999 14.94L4.57994 7.52002L2.80994 9.29002L11.9999 18.48L21.1899 9.29002L19.4199 7.52002Z"
        fill={color}
      />
    </svg>
  ),
  'external-link': ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4437 2.49805H19.8102L8.65655 14.0648L10.4562 15.8002L21.5021 4.34514V9.06774H24.0021V-0.00195312H14.4437V2.49805Z"
        fill={color}
      />
      <path
        d="M-0.00207138 5.86301V24.0024H19.1147V11.9666H16.6147V21.5024H2.49793V8.36301H12.3258V5.86301H-0.00207138Z"
        fill={color}
      />
    </svg>
  ),
  farcaster: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.11859 0.043457H19.5979V21.9565H17.3257V11.9189H17.3034C17.0523 9.14476 14.7103 6.97081 11.8582 6.97081C9.00619 6.97081 6.66419 9.14476 6.41307 11.9189H6.39078V21.9565H4.11859V0.043457Z"
        fill={color}
      />
      <path
        d="M0.000244141 3.1537L0.923321 6.26393H1.70439V18.8463C1.31223 18.8463 0.994327 19.1627 0.994327 19.5531V20.4014H0.852315C0.46016 20.4014 0.142256 20.7179 0.142256 21.1083V21.9565H8.09492V21.1083C8.09492 20.7179 7.77702 20.4014 7.38486 20.4014H7.24285V19.5531C7.24285 19.1627 6.92494 18.8463 6.53279 18.8463H5.68072V3.1537H0.000244141Z"
        fill={color}
      />
      <path
        d="M17.4677 18.8463C17.0755 18.8463 16.7576 19.1627 16.7576 19.5531V20.4014H16.6156C16.2235 20.4014 15.9056 20.7179 15.9056 21.1083V21.9565H23.8582V21.1083C23.8582 20.7179 23.5403 20.4014 23.1482 20.4014H23.0062V19.5531C23.0062 19.1627 22.6883 18.8463 22.2961 18.8463V6.26393H23.0772L24.0002 3.1537H18.3198V18.8463H17.4677Z"
        fill={color}
      />
    </svg>
  ),

  copy: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0V3H7V2H14V10H13V12H16V0H5Z" fill={color} />
      <path d="M10 6V14H3V6H10ZM12 4H1V16H12V4Z" fill={color} />
    </svg>
  ),
  spinner: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
        fill={color}
      />
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        fill={color}
      />
    </svg>
  ),
  backArrow: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.82271 15.414L8.29702 14.0626L3.65737 9.00113L15.8841 9.00113V7.00113L3.79835 7.00113L8.79835 2.00113L7.38414 0.586914L0 7.97105L6.82271 15.414Z"
        fill={color}
      />
    </svg>
  ),
  search: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 21.4785L18.0768 15.5553C19.0856 14.0709 19.6765 12.2694 19.6765 10.3382C19.6765 5.1644 15.4826 0.970581 10.3088 0.970581C5.13499 0.970581 0.941162 5.1644 0.941162 10.3382C0.941162 15.5121 5.13499 19.7059 10.3088 19.7059C12.24 19.7059 14.0415 19.115 15.5403 18.1062L21.4491 24.0294L24 21.4785ZM10.3088 16.1029C7.12381 16.1029 4.5441 13.5232 4.5441 10.3382C4.5441 7.15323 7.12381 4.57352 10.3088 4.57352C13.4938 4.57352 16.0735 7.15323 16.0735 10.3382C16.0735 13.5232 13.4938 16.1029 10.3088 16.1029Z"
        fill={color}
      />
    </svg>
  ),

  chevronRight: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.60986 3.05001L9.55986 8.00001L4.60986 12.95L6.02986 14.36L12.3899 8.00001L6.02986 1.64001L4.60986 3.05001Z"
        fill={color}
      />
    </svg>
  ),
  blueCircle: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={color} />
    </svg>
  ),
};

export function Icon({ name, color = 'white', width = '24', height = '24' }: IconProps) {
  const icon = ICONS[name];
  if (icon) {
    return icon({ color, width, height });
  }
  return null;
}
