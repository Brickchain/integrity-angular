import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'integrity-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Input() public schedule?: ISchedule;

  @Input() public whenText = '';
  @Input() public untilText = '';
  @Input() public anytimeText = '';
  @Input() public fromText = '';
  @Input() public toText = '';
  @Input() public atText = '';
  @Input() public specificTimeText = '';
  @Input() public repeatText = '';
  @Input() public everyText = '';
  @Input() public dayText = '';
  @Input() public dayPluralText = '';
  @Input() public weekText = '';
  @Input() public weekPluralText = '';
  @Input() public monthText = '';
  @Input() public monthPluralText = '';
  @Input() public yearText = '';
  @Input() public yearPluralText = '';
  @Input() public addMomentText = '';
  @Input() public untilNoLimitText = '';
  @Input() public untilDateText = '';
  @Input() public selectEndDateText = '';
  @Input() public repeatOnText = '';
  @Input() public everyMonthtext = '';

  @Output() scheduleChange = new EventEmitter<ISchedule>();

  whenChoice: string;
  untilChoice: string;
  repeatNumber: any;
  repeatNumbers: Array<number>;
  repeatType?: RepeatTypeOption;
  repeatTypeOptions?: Array<RepeatTypeOption>;
  days: Array<string>;
  selectedDays?: Array<string>;

  fromDate: moment.Moment;
  fromTime: moment.Moment;
  toDate: moment.Moment;
  toTime: moment.Moment;
  untilDate: moment.Moment;

  constructor() {
    this.whenChoice = 'any';
    this.untilChoice = 'nolimit';
    this.fromDate = moment(new Date(Math.floor(Date.now() / 300000) * 300000));
    this.fromTime = moment(this.fromDate);
    this.toDate = moment(new Date((Math.floor(Date.now() / 300000) * 300000) + (60 * 60 * 1000)));
    this.toTime = moment(this.toDate);
    this.untilDate = moment(this.toDate);

    this.repeatNumbers = Array.from(new Array(30), (x, i) => i + 1);
    this.repeatNumber = 1;
    this.setRepeatTypeOptions();
    this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.selectedDays = [];
  }

  ngOnInit(): void {
    this.setRepeatTypeOptions();
    this.initializeSchedule();
    this.scheduleChange.emit(this.getCurrentSchedule());
  }

  private initializeSchedule(): void {
    if (this.schedule != null) {
      this.fromDate = moment(this.schedule.from);
      this.fromTime = moment(this.fromDate);

      if (this.schedule.to == null) {
        return;
      } else {
        this.toDate = moment(this.schedule.to);
        this.toTime = moment(this.toDate);

        if (this.schedule.to === moment(this.schedule.to).endOf('day')) {
          this.untilChoice = 'date';
          this.untilDate = moment(this.schedule.until);
          return;
        }

        this.whenChoice = 'specific';
      }

      if (this.schedule.repeatType != null) {
        this.shouldRepeat = true;
        this.repeatNumber = this.schedule.period;
        this.repeatType = this.schedule.repeatType;
        this.selectedDays = this.schedule.weekDays != null ? this.schedule.weekDays : this.selectedDays;

        if (this.schedule.until != null) {
          this.untilChoice = 'date';
          this.untilDate = moment(this.schedule.until);
        }
      }
    }
  }

  private setRepeatTypeOptions(): void {
    this.repeatTypeOptions = [
      {
        type: 'day',
        singular: this.dayText,
        plural: this.dayPluralText
      },
      {
        type: 'week',
        singular: this.weekText,
        plural: this.weekPluralText
      },
      {
        type: 'month',
        singular: this.monthText,
        plural: this.monthPluralText
      },
      {
        type: 'year',
        singular: this.yearText,
        plural: this.yearPluralText
      }
    ];
    this.repeatType = this.repeatTypeOptions[0];
  }

  private getCurrentSchedule(): ISchedule {
    const schedule: ISchedule = {
      from: this.fromDate.toDate()
    };

    if (this.whenChoice === 'any' && this.untilChoice === 'date') {
      schedule['to'] = this.untilDate.toDate();
    } else if (this.whenChoice === 'specific') {
      schedule['to'] = this.toDate.toDate();
    }

    if (this.shouldRepeat && this.untilChoice === 'date') {
      schedule['until'] = this.untilDate.toDate();
    }

    if (this.shouldRepeat) {
      schedule['repeatType'] = this.repeatType.type;
      schedule['period'] = this.repeatNumber;

      if (this.repeatType.type === 'week') {
        schedule['weekdays'] = this.selectedDays;
      }
    }

    return schedule;
  }

  onInputChanged(): void {
    this.scheduleChange.emit(this.getCurrentSchedule());
  }

  onFromTimeChanged(): void {
    this.fromDate.minute(this.fromTime.minute());
    this.fromDate.hour(this.fromTime.hour());
    this.scheduleChange.emit(this.getCurrentSchedule());
  }

  onToTimeChanged(): void {
    this.toDate.minute(this.toTime.minute());
    this.toDate.hour(this.toTime.hour());
    this.scheduleChange.emit(this.getCurrentSchedule());
  }

  selectDay(day: string): void {
    if (this.selectedDays == null) { return; }

    if (this.selectedDays.indexOf(day) === -1) {
      this.selectedDays.push(day);
    } else {
      this.selectedDays.splice(this.selectedDays.indexOf(day), 1);
    }

    this.onInputChanged();
  }

  isSelected(day: string): boolean {
    return this.selectedDays != null && this.selectedDays.indexOf(day) !== -1;
  }
}

interface RepeatTypeOption {
    type: string;
    singular: string;
    plural: string;
}

export interface ISchedule {
  from: Date;
  to?: Date;
  until?: Date;
  repeatType?: string;
  period?: number;
  weekDays?: Array<string>;
}
