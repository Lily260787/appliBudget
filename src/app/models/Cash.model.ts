export class Cash {
  constructor(
    public id: string,
    public amount: number,
    public comment: string,
    public date: string,
    public label: string,
    public status: string,
    public modality: string,
    public recurrence: boolean
  ) {}
}
