// src/utils/groupUsers.ts
import { IUser } from '../modules/createDataForm/infrastructure';

interface Summary {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

export type DeptSummary = Record<string, Summary>;

export function groupByDept(users: IUser[]): DeptSummary {
  const result: DeptSummary = {};

  for (const u of users) {
    const dept = u.company.department || 'Unknown';
    const summary = result[dept] ?? {
      male: 0,
      female: 0,
      ageRange: '',
      hair: {},
      addressUser: {},
    };

    // count gender
    if (u.gender === 'male') summary.male++;
    else summary.female++;

    // age range
    summary.ageRange = summary.ageRange
      ? `${Math.min(Number(summary.ageRange.split('-')[0]), u.age)}-${Math.max(Number(summary.ageRange.split('-')[1] ?? u.age), u.age)}`
      : `${u.age}-${u.age}`;

    // hair colors
    summary.hair[u.hair.color] = (summary.hair[u.hair.color] ?? 0) + 1;

    // addressUser: firstName+lastName => postalCode
    summary.addressUser[`${u.firstName}${u.lastName}`] = u.address.postalCode;

    result[dept] = summary;
  }

  return result;
}
