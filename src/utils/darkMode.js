if ( localStorage.theme === 'dark' || !( 'theme' in localStorage ) && window.matchMedia('(prefers-color-scheme: dark)').media ) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'light'
} else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'dark'
}
