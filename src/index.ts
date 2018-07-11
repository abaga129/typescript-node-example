import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


function main(): void {
  console.log("Hello World!");
  const x: string = "hello world!";
  console.log(x);

  var input = from([1, 2, 3, 4]);
  var output = multiplyByTen(input);
  output.subscribe((x: any) => console.log(x));
}

function multiplyByTen(input: any) {
  var output = Observable.create(function subscribe(observer: any) {
    input.subscribe({
      next: (v: any) => observer.next(10 * v),
      error: (err: any) => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return output;
}


main();
