<?php

   $received=json_decode($detailsSent,true);

   foreach($received as $data){
       $id=$data['id'];
       //$name=$data['name'];
       $name="text";
       $price=$data['price'];
       $unit=1;
    ?>
        <tr>
            <td><?= $data['name'] ?></td>
            <td><?= $data['quantity'] ?></td>
            <td><?= $data['price'] ?></td>
            <td class="to-hide">
                <div class="btn-group" role="group">
                    
                    <button class="btn btn-sm btn-outline-info" onclick="addToCart(<?php echo $id.','.$name.','.$price.','.$unit;?>)">
                    <i class="fas fa-plus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-info">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    <?php   
   }
?>

<script>
    // var idmm = document.getElementById('id').textContent;
    // var namemm = document.getElementById('name').textContent;
    // var pricemm = document.getElementById('price').textContent;
</script>
