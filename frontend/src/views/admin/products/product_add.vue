<h1>Create Product</h1>
<form method="POST" id="createProductForm">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
    </div>
    <div class="mb-3">
        <label for="category_id" class="form-label">Category</label>
        <select class="form-select" id="category_id" name="category_id" required>
            <option value="">--Danh mục--</option>
            <?php foreach ($categories as $category) : ?>
                <option value="<?= $category['id'] ?>"><?= htmlspecialchars($category['name']) ?></option>
            <?php endforeach; ?>
        </select>
    </div>
    <div id="variant-container" class="mb-3">
        <!-- Variants will be added dynamically here -->
    </div>
    <button type="button" class="btn btn-info" id="addVariantButton">Thêm biến thể</button>
    <button type="submit" class="btn btn-success">Create</button>
</form>

<script>
    const sizes = <?= json_encode($sizes) ?>; // Array of sizes from PHP
    const colors = <?= json_encode($colors) ?>; // Array of colors from PHP

    const variantContainer = document.getElementById('variant-container');
    const addVariantButton = document.getElementById('addVariantButton');
    const createProductForm = document.getElementById('createProductForm');

    let variantCount = 0;

    function generateOptions(data, valueKey, textKey) {
        return data.map(item => <option value="${item[valueKey]}">${item[textKey]}</option>).join('');
    }

    function addVariant() {
        const variantHTML = 
            <div class="form-group variant-group border p-3 mb-3" id="variant-${variantCount}">
                <div class="row">
                    <div class="col-md-2">
                        <label for="size-${variantCount}" class="form-label">Kích thước</label>
                        <select name="variants[${variantCount}][size]" id="size-${variantCount}" class="form-select" required>
                            <option value="">Chọn kích thước</option>
                            ${generateOptions(sizes, 'idSize', 'nameSize')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="color-${variantCount}" class="form-label">Màu sắc</label>
                        <select name="variants[${variantCount}][color]" id="color-${variantCount}" class="form-select" required>
                            <option value="">Chọn màu sắc</option>
                            ${generateOptions(colors, 'idColor', 'nameColor')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="price-${variantCount}" class="form-label">Giá</label>
                        <input type="number" name="variants[${variantCount}][price]" id="price-${variantCount}" class="form-control" placeholder="Nhập giá" min="0" required>
                    </div>
                    <div class="col-md-2">
                        <label for="quantity-${variantCount}" class="form-label">Số lượng</label>
                        <input type="number" name="variants[${variantCount}][quantity]" id="quantity-${variantCount}" class="form-control" placeholder="Nhập số lượng" min="0" required>
                    </div>
                    <div class="col-md-2">
                        <label for="sku-${variantCount}" class="form-label">Sku</label>
                        <input type="text" name="variants[${variantCount}][sku]" id="sku-${variantCount}" class="form-control" placeholder="Nhập sku" required>
                    </div>
                    <div class="col-md-2 d-flex align-items-end">
                        <button type="button" class="btn btn-danger" onClick="removeVariant(${variantCount})">Xóa</button>
                    </div>
                </div>
            </div>
        ;
        variantContainer.insertAdjacentHTML('beforeend', variantHTML);
        variantCount++;
    }

    function removeVariant(index) {
        const variant = document.getElementById(variant-${index});
        if (variant) {
            variant.remove();
        }
    }

    addVariantButton.addEventListener('click', addVariant);

    createProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(createProductForm);

        const productData = {
            name: formData.get('name'),
            description: formData.get('description'),
            category_id: formData.get('category_id'),
            variants: [],
        };

        for (let i = 0; i < variantCount; i++) {
            const size = formData.get(variants[${i}][size]);
            const color = formData.get(variants[${i}][color]);
            const price = formData.get(variants[${i}][price]);
            const quantity = formData.get(variants[${i}][quantity]);
            const sku = formData.get(variants[${i}][sku]);

            if (size && color && price && quantity && sku) {
                productData.variants.push({ size, color, price, quantity, sku });
            }
        }

        try {
            const response = await fetch('/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Sản phẩm đã được tạo thành công!');
                console.log(result);
            } else {
                alert(Lỗi: ${result.message});
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi khi gửi dữ liệu.');
        }
    });
</script> 