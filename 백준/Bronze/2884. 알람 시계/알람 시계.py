hour, minute = map(int, input().split())

alrim_minute = minute - 45 if minute >= 45 else 60 + minute - 45

if minute - 45 < 0:
    if hour == 0:
        hour = 24
    hour = hour - 1

print(f"{hour} {alrim_minute}")