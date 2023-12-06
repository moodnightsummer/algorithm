hour, minute = map(int, input().split());
time = int(input());

plusMinute = minute + time;

endMinute = plusMinute % 60;
endHour = hour + (plusMinute // 60);

if(endHour > 23):
    print(f"{endHour - 24} {endMinute}")
else:
    print(f"{endHour} {endMinute}");