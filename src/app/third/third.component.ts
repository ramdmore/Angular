import { Component, ViewChild } from '@angular/core';

@Component({
  selector: `ea32-third`,
  templateUrl: `./third.component.html`,
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent {
  myHeading: string = 'Emmet 32';

  myImgSrc: string = '';

  myColspan = 2;

  // basically ViewChild will return one object --- object return key i.e. nativeElement(ElementRef)
  @ViewChild('myInput5') myCollectedValueForInput5: any;

  myInp6Value: string = 'Ram';

  myInp7Value: any = 'Ram More';

  studentList: string[] = ['Manoj', 'Prashant', 'Devendra', 'Yuvraj'];

  carList = [
    {
      brandName: 'Tata',
      model: 'Harrier',
      type: 'SUV',
      color: 'Black',
    },

    {
      brandName: 'Bmw',
      model: 'M4',
      type: 'coupe',
      color: 'Red',
    },

    {
      brandName: 'Maruti Suzuki',
      model: 'Grand Vitara',
      type: 'Hatchback',
      color: 'White',
    },
  ];

  isElegible = true;

  myGraphicCard = {
    name: 'Nvidea RTX 4090 TI',
    cudaCores: 16382383,
    boostClock: 352.52486878,
    price: 213369,
    realeaseDate: new Date('10/12/2023'),
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis vitae natus facere labore provident ad iste unde repudiandae omnis praesentium eos commodi accusantium laborum laudantium odio, ipsum explicabo id culpa suscipit, aliquam, velit sed aliquid. Expedita earum itaque deserunt cum non dolore, perferendis recusandae, id soluta eaque, in obcaecati sapiente natus ratione ut pariatur maiores repudiandae ea amet labore unde. Dolores recusandae voluptates molestiae sunt adipisci dignissimos libero veritatis. Molestias culpa tempora nesciunt obcaecati odio necessitatibus repellat quam impedit, vitae beatae mollitia est dolore iusto ducimus officiis asperiores autem distinctio magnam minima eos eligendi cupiditate fuga perferendis. Quos, nemo?',
  };

  getMyHeading() {
    return this.myHeading;
  }

  input1Changed() {
    console.log('input changed');
  }

  input2Changed(eve: any) {
    if (eve.keyCode === 13) {
      console.log('input 2 changed', eve.target.value);
    }
  }

  input3Changed(eve: any) {
    console.log('input 3 changed', eve.target.value);
  }

  input4Changed(inp: any) {
    console.log('input 4 changed', inp.value);
  }

  input5Changed() {
    debugger;
    console.log(
      'input 5 changed',
      this.myCollectedValueForInput5.nativeElement.value
    );
  }

  input6Changed(eve: any) {
    console.log('input 6 changed', eve.target.value);
    this.myInp6Value = eve.target.value;
  }
}
