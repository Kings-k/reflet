<?php

namespace App\Tools;

use Symfony\Component\Validator\Validator\ValidatorInterface;

class Validator
{
	private $validator;

	public function __construct(ValidatorInterface $validator)
	{
		$this->validator = $validator;
	}

	public function validate($object) {
		$violationList = $this->validator->validate($object);
		$errors = [];

		foreach ($violationList->getIterator() as $violation) {
			$propertyPath = $violation->getPropertyPath();
			$error = [
				'invalidValue' => $violation->getInvalidValue(),
				'message' => $violation->getConstraint()->message
			];
			if (in_array($propertyPath, $errors)) {
				$errors[$propertyPath][] = $error;
			} else {
				$errors[$propertyPath] = [$error];
			}
		}

		return $errors;
	}

	// public function getErrorsByPropertyPath(string $attribute, array $errors) {
	// 	return array_filter($errors, function ($e) use ($attribute) {
	// 		return $e['propertyPath'] === $attribute;
	// 	});
	// }
}
