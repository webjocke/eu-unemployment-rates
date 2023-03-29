
export interface APIDataPoint {
    AGE: "Total",
    FREQ: "Annual",
    GEO: string,
    LMP_TYPE: "Total LMP measures (categories 2-7)",
    REGIS_ES: "Registered unemployed",
    SEX: "Males" | "Females",
    UNIT: "Rate",
    value: number | null,
    TIME_PERIOD: string,
}

export interface DataPoint {
    year: string,
    male: number,
    female: number,
}

export type CountryISOCode = 'BE' | 'BG' | 'CZ' | 'DK' | 'DE' | 'EE' | 'IE' | 'EL' | 'ES' | 'FR' | 'HR' | 'IT' | 'LV' | 'LT' | 'LU' | 'HU' | 'MT' | 'NL' | 'AT' | 'PL' | 'PT' | 'RO' | 'SI' | 'SK' | 'FI' | 'SE' | 'NO'

export interface Country {
    iso: CountryISOCode,
    label: string,
    imageUrl: string,
}

export const defaultGraphData:DataPoint[] = [
    {year: "1997", male:0, female:0},
    {year: "1998", male:0, female:0},
    {year: "1999", male:0, female:0},
    {year: "2000", male:0, female:0},
    {year: "2001", male:0, female:0},
    {year: "2002", male:0, female:0},
    {year: "2003", male:0, female:0},
    {year: "2004", male:0, female:0},
    {year: "2005", male:0, female:0},
    {year: "2006", male:0, female:0},
    {year: "2007", male:0, female:0},
    {year: "2008", male:0, female:0},
    {year: "2009", male:0, female:0},
    {year: "2010", male:0, female:0},
    {year: "2011", male:0, female:0},
    {year: "2012", male:0, female:0},
    {year: "2013", male:0, female:0},
    {year: "2014", male:0, female:0},
    {year: "2015", male:0, female:0},
    {year: "2016", male:0, female:0},
    {year: "2017", male:0, female:0},
    {year: "2018", male:0, female:0},
    {year: "2019", male:0, female:0},
    {year: "2020", male:0, female:0},
]

export const allCountries:Country[] = [
    { iso: 'BE', label: 'Belgium (BE)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png' },
    { iso: 'BG', label: 'Bulgaria (BG)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png' },
    { iso: 'CZ', label: 'Czechia Republic (CZ)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png' },
    { iso: 'DK', label: 'Denmark (DK)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png' },
    { iso: 'DE', label: 'Germany (DE)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' },
    { iso: 'EE', label: 'Estonia (EE)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1200px-Flag_of_Estonia.svg.png' },
    { iso: 'IE', label: 'Ireland (IE)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png' },
    { iso: 'EL', label: 'Greece (EL)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png' },
    { iso: 'ES', label: 'Spain (ES)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png' },
    { iso: 'FR', label: 'France (FR)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png' },
    { iso: 'HR', label: 'Croatia (HR)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png' },
    { iso: 'IT', label: 'Italy (IT)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png' },
    { iso: 'LV', label: 'Latvia (LV)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1200px-Flag_of_Latvia.svg.png' },
    { iso: 'LT', label: 'Lithuania (LT)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1200px-Flag_of_Lithuania.svg.png' },
    { iso: 'LU', label: 'Luxembourg (LU)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1200px-Flag_of_Luxembourg.svg.png' },
    { iso: 'HU', label: 'Hungary (HU)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1200px-Flag_of_Hungary.svg.png' },
    { iso: 'MT', label: 'Malta (MT)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1200px-Flag_of_Malta.svg.png' },
    { iso: 'NL', label: 'Netherlands (NL)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png' },
    { iso: 'AT', label: 'Austria (AT)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png' },
    { iso: 'PL', label: 'Poland (PL)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png' },
    { iso: 'PT', label: 'Portugal (PT)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png' },
    { iso: 'RO', label: 'Romania (RO)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png' },
    { iso: 'SI', label: 'Slovenia (SI)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png' },
    { iso: 'SK', label: 'Slovakia (SK)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png' },
    { iso: 'FI', label: 'Finland (FI)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png' },
    { iso: 'SE', label: 'Sweden (SE)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png' },
    { iso: 'NO', label: 'Norway (NO)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1200px-Flag_of_Norway.svg.png' },
]