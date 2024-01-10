export interface MockData {
  [key: string]: SingleList
}

export interface SingleList {
  newUsers: number
  list: List[]
}

export interface List {
  id: string
  name: string
  age: number
  ht: string
  marriageStatus: string
  address: string
  Prof: string
  degree: string
  memberShipStatus: MemberShipStatus
  color: string
  lastchatted: string
  img: string
}

export interface MemberShipStatus {
  prime: boolean
  assisted: boolean
  show: boolean
}


export type Navs = Nav[]

export interface Nav {
  id: number
  name: string
  link: string
}
