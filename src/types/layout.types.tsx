import { PropsWithChildren } from 'react'

export interface IMainHeader {
	text: string
	image?: string
}

export interface IMainLayout extends PropsWithChildren, IMainHeader {}
