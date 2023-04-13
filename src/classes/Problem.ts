import {TileData } from './TileData';
export interface Problem{
    left: number,
    right: number,
    goal: number,
    tiles: TileData[],
    id: number
}