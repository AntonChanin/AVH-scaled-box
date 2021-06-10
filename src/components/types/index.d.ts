export interface ScaledBoxProps {
  color?: string,
  background?: string,
  rotate?:number,
  size?: string,
  weight?: string,
  family?: string,
  scale?: number,
  metrics?: string,
  ratio?: number,
  radius?: number,
  border?: string,
  shadow?: string,
  flex?: string,
  addedCSS?:string,
}

export interface ScaledTitleProps {
  color?: string,
  size?: string,
  weight?: string,
  align?: string,
  family?:string,
}

export interface ScaledSliderProps {
  numeric?: number[],
  step?: number,
  handleChange(event: React.FormEvent<HTMLInputElement>):void,
  radius?: string,
  len?: number,
  stepScale?: number,
  trackScale?: number,
  thumbScale?: number,
  color?: string,
  rotate?: number,
}
