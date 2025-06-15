from flask import request, jsonify
# from app import data

def get_match_pet(data):
  petTypeParam = request.args.get("petType")
  breedParam = request.args.get("breed")
  ageMonthParam = request.args.get("ageMonths")
  sizeParam = request.args.get("size")
  weightParam = request.args.get("weight")
  vaccinatedParam = request.args.get("vaccinated")
  healthConditionParam = request.args.get("healthCondition")
  adoptionFeeParam = request.args.get("adoptionFee")
  previousOwnerParam = request.args.get("previousOwner")

  result = []
  
  for pet in data:
    petTypeCondition = pet["PetType"] in petTypeParam
    breedCondition = breedParam == "" or pet["Breed"] in breedParam
    ageMonthCondition = pet["AgeMonths"] >= int(ageMonthParam)
    sizeCondition = pet["Size"] > sizeParam
    weightCondition = pet["WeightKg"] > float(weightParam)
    vaccinatedCondition = vaccinatedParam == "" or pet["Vaccinated"] == int(vaccinatedParam)
    healthConditionCondition = healthConditionParam or pet["HealthCondition"] == int(healthConditionParam)
    adoptionFeeCondition = adoptionFeeParam == "" or pet["AdoptionFee"] <= int(adoptionFeeParam)
    previousOwnerCondition = previousOwnerParam == "" or pet["PreviousOwner"] == int(previousOwnerParam)

    isMatch = petTypeCondition and breedCondition and ageMonthCondition and sizeCondition and weightCondition and vaccinatedCondition and healthConditionCondition and adoptionFeeCondition and previousOwnerCondition

    if isMatch:
      result.append(pet)
  
  return jsonify(result)