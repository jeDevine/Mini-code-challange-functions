function logRectInfo(topLeft, bottomRight){
    length = topLeft[0]-bottomRight[0];
    if(length<0){
        length*=-1;
    }
    // console.log(length);

    width = topLeft[1]-bottomRight[1];
    if (width<0){
        width*=-1;
    }
    // console.log(width);
    area=length*width
    perimeter= 2*(length+width)
    console.log(`The area is ${area}`);
    console.log(`The perimeter is ${perimeter}`);
}

logRectInfo([0, 5], [5, 3]);
logRectInfo([-2, -4], [4, 6]);
logRectInfo([4, 5], [5, 4]);