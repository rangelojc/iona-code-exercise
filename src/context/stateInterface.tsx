export interface IStateManager {
    selectionId: string,
    selectionList: any[],

    setSelectionId?: any
    setSelectionList?: any
}

export interface IStateManagerProvider {
    children: any
}