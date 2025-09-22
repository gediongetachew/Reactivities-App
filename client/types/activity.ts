export interface Activity {
  Id: number;
  Title: string;
  Date: string;
  Description: string;
  City: string;
  Venue: string;
  Category: {
    Name: string;
  };
}
