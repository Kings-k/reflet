<?php

namespace App\Tools;

class ServiceUtils
{
    public function findServices(array $cats, array $servs): array
    {
        $children = [];

        for ($i = 0, $c = count($cats); $i < $c; $i++) {
            $childr = $cats[$i]->getChildren()->toArray();
            if (count($childr) == 0) {
                $servs = array_merge($servs, $cats[$i]->getServices()->toArray());
            } else {
                $children = array_merge($children, $childr);
            }
        }

        if (count($children) > 0) {
            return $this->findServices($children, $servs);
        }

        return $servs;
    }
}