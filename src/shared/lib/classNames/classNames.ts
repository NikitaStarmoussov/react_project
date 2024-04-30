type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  const modsArray = Object.entries(mods)
    .filter((value) => Boolean(value[1]))
    .map((value) => value[0]);
  return [cls, ...additional, ...modsArray].join(' ');
}
