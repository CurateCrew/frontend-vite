import profileImage from "../../public/images/curate.svg"
interface IChannel {
  profileImage: string,
  channelName: string
}
export const channelList: IChannel[] = [
  {
    profileImage: profileImage,
    channelName: "base"
  },
  {
    profileImage: profileImage,
    channelName: "curatecast"
  },
  {
    profileImage: profileImage,
    channelName: "design"
  },
  {
    profileImage: profileImage,
    channelName: "frontend"
  },
  {
    profileImage: profileImage,
    channelName: "frontend"
  },
  {
    profileImage: profileImage,
    channelName: "rollup"
  }

]