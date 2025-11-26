def solution(participant, completion):
    if len(completion) == 0:
        return participant[0]
    sortParti = sorted(participant)
    sortCompl = sorted(completion)

    for i in range(len(sortParti)):
        if sortParti[i] != sortCompl[i] or len(sortParti) == i:
            return sortParti[i]

    
    
    
print(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))
