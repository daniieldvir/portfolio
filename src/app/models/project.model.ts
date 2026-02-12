export interface Project {
  projectName: string
  description: string
  team: string
  mainTechnology: string
  styling: string
  otherTechnologies?: string[]
  img: string
  tags: Tag[]
  userAccess?: UserAccess[]
}

export interface Tag {
  label: string
  full: string
  link: string
}

export interface UserAccess {
  userName: string
  password: string
}