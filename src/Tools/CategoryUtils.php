<?php

namespace App\Tools;

class CategoryUtils
{
    public function findCategories(array $categs, array $cats): array
    {
        $parents = [];

        for ($i = 0, $c = count($categs); $i < $c; $i++) {
            $parent = $categs[$i]->getParent();
            if ($parent == null && !in_array($categs[$i], $cats)) {
                $cats[] = $categs[$i];
            } elseif ($parent != null && !in_array($parent, $parents)) {
                $parents[] = $parent;
            }
        }

        if (count($parents) > 0) {
            return $this->findCategories($parents, $cats);
        }

        return $cats;
    }
}
