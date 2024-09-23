<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Article</th>
                            <th scope="col">Qté dispo</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Stock de sécurité</th>
                            <th scope="col">Alerte</th>
                            <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                            <th scope="col">Dépôt</th>
                            <?php endif ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($stocks as $key => $stock) : ?>
                        <tr>
                            <th scope="row"><?= $key + 1 ?></th>
                            <td><?= $stock->getService()->getName() ?></td>
                            <td><?= $stock->getQuantity() . ' ' . ($stock->getService()->getUom() !== null ? ($stock->getService()->getUom()->getSymbol() ?? $stock->getService()->getUom()->getName()).($stock->getQuantity() > 1 ? 's' : '') : '') ?></td>
                            <td><?= $stock->getService()->getCategory()->getName() ?></td>
                            <td class="w-25">
                                <div class="input-group">
                                    <input type="number" class="form-control safetyStock" data-stock-key="<?= $key ?>" data-depot=<?= $stock->getId() ?> value="<?= $stock->getSafetyStock() ?>" min="0">
                                    <button class="btn btn-sm btn-outline-primary" data-ripple-color="dark" disabled><i class="far fa-save"></i></button>
                                </div>
                            </td>
                            <td>
                                <?php if ($stock->getQuantity() > $stock->getSafetyStock() && $stock->getQuantity() < 1.5 * $stock->getSafetyStock()) : ?>
                                    <span class="badge bg-warning alert<?= $key ?> p-2">Un peu bien</span>
                                <?php elseif ($stock->getQuantity() <= $stock->getSafetyStock()) : ?>
                                    <span class="badge bg-danger alert<?= $key ?> text-light p-2">Fin de stock</span>
                                <?php else : ?>
                                    <span class="badge bg-success alert<?= $key ?> text-light p-2">Bon état</span>
                                <?php endif ?>
                            </td>
                            <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                            <td><?= $stock->getDepot()->getName() ?></td>
                            <?php endif ?>
                        </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script defer>
    document.querySelectorAll('.safetyStock').forEach(safetyStock => {
        safetyStock.addEventListener('focus', (e) => {
            const saveBtn = e.currentTarget.parentNode.querySelector('button');
            saveBtn.removeAttribute('disabled');
            saveBtn.addEventListener('click', () => {
                const headers = new Headers();
                headers.append('Content-Type', 'application/json');
                fetch(`${baseUrl}/fichestock/safetystock/${safetyStock.dataset['depot']}`, {
                    method: 'POST',
                    body: JSON.stringify({safetyStock: safetyStock.value}),
                    headers: headers
                }).then(resp => {
                    if (resp.ok) {
                        resp.text().then(data => {
                            const stockKey = safetyStock.dataset['stockKey'],
                                alert = document.querySelector('.alert'+stockKey),
                                qty = JSON.parse(data).quantity;
                            safetyStock.removeEventListener('focus', this);
                            saveBtn.setAttribute('disabled', 'disabled');
                            if (qty > safetyStock.value) {
                                alert.classList = 'badge bg-success text-light p-2 alert'+stockKey;
                                alert.textContent = 'Bon état';
                            } else if (qty == 0) {
                                alert.classList = 'badge bg-danger text-light p-2 alert'+stockKey;
                                alert.textContent = 'Fin de stock';
                            } else {
                                alert.classList = 'badge bg-warning p-2 alert'+stockKey;
                                alert.textContent = 'Un peu bien';
                            }
                            showAlert(JSON.parse(data), 'success');
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        });
                    }
                });
                safetyStock.removeEventListener('focus', this);
                saveBtn.removeEventListener('click', this);
            });
        });
    });
</script>
<?php $view['slots']->stop() ?>
