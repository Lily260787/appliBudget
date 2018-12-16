export class Cash {
  constructor(
    public amount: number,
    public comment: string,
    public date: string,
    public label: string,
    public status: string,
    type: string
  ) {}
}
