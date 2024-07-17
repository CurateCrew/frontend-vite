interface INav {
  name: string
  link?: string
  action?: () => void
}
export const navItems: INav[] = [
  {
    name: "Home",
    link: "/"
  },

  {
    name: "Edit Preference",
    action: () =>{}
  },

  {
    name: "Help & Support",
    link: "/"
  },

  {
    name: "Logout",
    link: "/"
  }
]