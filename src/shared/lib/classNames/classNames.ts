type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter((value) => Boolean(value[1]))
      .map(([className]) => className)
  ].join(' ');
}
