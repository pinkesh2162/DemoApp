export function getDayDifference(startDate: string | Date, endDate: string | Date): number {
    const timeDiff = new Date(startDate).getTime() - new Date(endDate).getTime();
    const days = timeDiff / (1000 * 60 * 60 * 24);
    return Math.round(days);
}